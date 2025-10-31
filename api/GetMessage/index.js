module.exports = async function (context, req) {
  const date = "2025-10-31T15:12:18.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

