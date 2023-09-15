module.exports = async function (context, req) {
  const date = "2023-09-15T06:11:41.464Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

