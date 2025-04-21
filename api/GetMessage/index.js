module.exports = async function (context, req) {
  const date = "2025-04-21T15:13:27.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

