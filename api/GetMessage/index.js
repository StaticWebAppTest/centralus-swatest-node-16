module.exports = async function (context, req) {
  const date = "2023-08-20T22:07:14.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

