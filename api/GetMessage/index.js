module.exports = async function (context, req) {
  const date = "2025-01-28T10:12:12.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

