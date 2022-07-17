module.exports = async function (context, req) {
  const date = "2022-07-17T07:09:49.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

