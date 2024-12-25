module.exports = async function (context, req) {
  const date = "2024-12-25T03:15:32.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

