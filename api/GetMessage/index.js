module.exports = async function (context, req) {
  const date = "2024-08-08T14:09:59.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

