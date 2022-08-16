module.exports = async function (context, req) {
  const date = "2022-08-16T16:14:52.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

