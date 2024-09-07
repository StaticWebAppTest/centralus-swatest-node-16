module.exports = async function (context, req) {
  const date = "2024-09-07T06:14:35.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

