module.exports = async function (context, req) {
  const date = "2024-06-19T10:11:28.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

