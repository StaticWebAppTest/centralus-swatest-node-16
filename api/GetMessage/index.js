module.exports = async function (context, req) {
  const date = "2022-11-20T17:09:21.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

