module.exports = async function (context, req) {
  const date = "2023-08-23T11:06:50.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

