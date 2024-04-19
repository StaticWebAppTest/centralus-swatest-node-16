module.exports = async function (context, req) {
  const date = "2024-04-19T20:09:22.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

