module.exports = async function (context, req) {
  const date = "2024-12-14T10:11:56.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

