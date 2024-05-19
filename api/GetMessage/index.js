module.exports = async function (context, req) {
  const date = "2024-05-19T21:09:12.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

