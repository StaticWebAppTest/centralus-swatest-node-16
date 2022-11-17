module.exports = async function (context, req) {
  const date = "2022-11-17T11:09:08.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

