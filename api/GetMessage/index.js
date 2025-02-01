module.exports = async function (context, req) {
  const date = "2025-02-01T08:13:25.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

