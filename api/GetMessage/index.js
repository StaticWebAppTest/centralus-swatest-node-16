module.exports = async function (context, req) {
  const date = "2024-05-08T14:08:43.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

