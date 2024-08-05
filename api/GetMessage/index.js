module.exports = async function (context, req) {
  const date = "2024-08-05T13:14:49.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

