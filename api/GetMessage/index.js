module.exports = async function (context, req) {
  const date = "2025-05-04T20:13:13.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

