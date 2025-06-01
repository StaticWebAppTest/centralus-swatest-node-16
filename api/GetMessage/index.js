module.exports = async function (context, req) {
  const date = "2025-06-01T08:16:30.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

