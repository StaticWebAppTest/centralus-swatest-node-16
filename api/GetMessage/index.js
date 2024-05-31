module.exports = async function (context, req) {
  const date = "2024-05-31T14:09:10.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

