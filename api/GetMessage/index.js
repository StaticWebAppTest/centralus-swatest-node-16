module.exports = async function (context, req) {
  const date = "2023-01-13T07:09:05.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

