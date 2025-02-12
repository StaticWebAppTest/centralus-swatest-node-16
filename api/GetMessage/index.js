module.exports = async function (context, req) {
  const date = "2025-02-12T22:11:13.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

