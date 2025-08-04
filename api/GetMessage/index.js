module.exports = async function (context, req) {
  const date = "2025-08-04T10:18:06.398Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

