module.exports = async function (context, req) {
  const date = "2025-05-01T23:12:31.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

