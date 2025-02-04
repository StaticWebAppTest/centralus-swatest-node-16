module.exports = async function (context, req) {
  const date = "2025-02-04T10:12:40.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

