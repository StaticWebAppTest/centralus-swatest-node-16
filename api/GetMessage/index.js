module.exports = async function (context, req) {
  const date = "2024-07-10T21:09:38.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

