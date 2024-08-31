module.exports = async function (context, req) {
  const date = "2024-08-31T14:09:05.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

