module.exports = async function (context, req) {
  const date = "2024-07-21T03:12:16.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

