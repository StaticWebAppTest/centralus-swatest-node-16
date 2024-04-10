module.exports = async function (context, req) {
  const date = "2024-04-10T19:08:17.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

