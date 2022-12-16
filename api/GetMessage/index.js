module.exports = async function (context, req) {
  const date = "2022-12-16T08:11:52.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

