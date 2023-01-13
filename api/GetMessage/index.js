module.exports = async function (context, req) {
  const date = "2023-01-13T05:09:26.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

