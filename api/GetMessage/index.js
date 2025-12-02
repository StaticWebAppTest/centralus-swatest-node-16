module.exports = async function (context, req) {
  const date = "2025-12-02T22:12:28.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

