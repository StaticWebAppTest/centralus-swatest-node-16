module.exports = async function (context, req) {
  const date = "2025-02-27T20:13:35.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

