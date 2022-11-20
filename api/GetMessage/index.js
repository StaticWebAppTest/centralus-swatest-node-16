module.exports = async function (context, req) {
  const date = "2022-11-20T07:09:38.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

