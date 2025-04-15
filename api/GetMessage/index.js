module.exports = async function (context, req) {
  const date = "2025-04-15T10:14:14.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

