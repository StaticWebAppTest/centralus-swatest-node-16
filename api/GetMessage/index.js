module.exports = async function (context, req) {
  const date = "2025-08-23T08:15:39.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

