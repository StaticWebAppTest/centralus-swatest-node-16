module.exports = async function (context, req) {
  const date = "2024-08-22T12:20:00.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

