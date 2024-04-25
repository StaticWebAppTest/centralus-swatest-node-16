module.exports = async function (context, req) {
  const date = "2024-04-25T22:08:31.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

