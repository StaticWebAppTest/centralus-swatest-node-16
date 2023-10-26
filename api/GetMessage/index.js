module.exports = async function (context, req) {
  const date = "2023-10-26T05:08:22.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

