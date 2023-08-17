module.exports = async function (context, req) {
  const date = "2023-08-17T21:07:33.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

