module.exports = async function (context, req) {
  const date = "2025-04-24T23:12:27.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

