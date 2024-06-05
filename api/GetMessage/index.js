module.exports = async function (context, req) {
  const date = "2024-06-05T03:13:15.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

