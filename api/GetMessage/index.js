module.exports = async function (context, req) {
  const date = "2024-06-07T14:10:46.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

