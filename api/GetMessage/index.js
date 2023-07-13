module.exports = async function (context, req) {
  const date = "2023-07-13T05:09:58.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

