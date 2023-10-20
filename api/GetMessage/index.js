module.exports = async function (context, req) {
  const date = "2023-10-20T06:12:18.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

