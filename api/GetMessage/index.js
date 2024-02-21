module.exports = async function (context, req) {
  const date = "2024-02-21T14:08:16.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

