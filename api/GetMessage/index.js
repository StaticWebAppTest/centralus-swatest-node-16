module.exports = async function (context, req) {
  const date = "2023-11-26T16:10:24.569Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

