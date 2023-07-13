module.exports = async function (context, req) {
  const date = "2023-07-13T03:22:59.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

