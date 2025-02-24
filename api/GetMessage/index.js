module.exports = async function (context, req) {
  const date = "2025-02-24T05:12:21.029Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

