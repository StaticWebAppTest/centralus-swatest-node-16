module.exports = async function (context, req) {
  const date = "2023-09-30T17:07:05.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

