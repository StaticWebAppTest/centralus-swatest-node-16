module.exports = async function (context, req) {
  const date = "2025-02-07T10:12:36.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

