module.exports = async function (context, req) {
  const date = "2022-06-20T06:14:37.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

