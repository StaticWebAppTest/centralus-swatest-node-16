module.exports = async function (context, req) {
  const date = "2023-06-12T21:07:56.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

