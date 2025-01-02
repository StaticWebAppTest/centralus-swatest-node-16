module.exports = async function (context, req) {
  const date = "2025-01-02T08:15:23.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

