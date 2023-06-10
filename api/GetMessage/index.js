module.exports = async function (context, req) {
  const date = "2023-06-10T10:08:32.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

