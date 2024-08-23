module.exports = async function (context, req) {
  const date = "2024-08-23T13:14:43.055Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

