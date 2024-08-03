module.exports = async function (context, req) {
  const date = "2024-08-03T06:14:35.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

