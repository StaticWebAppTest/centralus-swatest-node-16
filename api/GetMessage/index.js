module.exports = async function (context, req) {
  const date = "2024-06-08T13:10:07.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

