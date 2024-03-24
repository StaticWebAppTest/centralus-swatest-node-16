module.exports = async function (context, req) {
  const date = "2024-03-24T02:19:49.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

