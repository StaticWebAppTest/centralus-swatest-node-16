module.exports = async function (context, req) {
  const date = "2024-08-24T12:18:20.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

