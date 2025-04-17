module.exports = async function (context, req) {
  const date = "2025-04-17T15:13:25.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

