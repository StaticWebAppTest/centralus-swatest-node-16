module.exports = async function (context, req) {
  const date = "2024-08-12T06:15:40.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

