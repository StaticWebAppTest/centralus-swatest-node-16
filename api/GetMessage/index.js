module.exports = async function (context, req) {
  const date = "2024-01-18T19:07:35.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

