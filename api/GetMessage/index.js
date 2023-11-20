module.exports = async function (context, req) {
  const date = "2023-11-20T07:09:11.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

