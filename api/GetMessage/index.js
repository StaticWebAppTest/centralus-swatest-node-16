module.exports = async function (context, req) {
  const date = "2025-02-06T17:10:35.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

