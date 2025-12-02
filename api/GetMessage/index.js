module.exports = async function (context, req) {
  const date = "2025-12-02T20:17:09.827Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

