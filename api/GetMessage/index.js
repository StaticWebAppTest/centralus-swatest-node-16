module.exports = async function (context, req) {
  const date = "2023-02-01T05:09:06.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

