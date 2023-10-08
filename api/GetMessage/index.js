module.exports = async function (context, req) {
  const date = "2023-10-08T12:15:04.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

