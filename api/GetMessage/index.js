module.exports = async function (context, req) {
  const date = "2025-02-12T11:09:53.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

