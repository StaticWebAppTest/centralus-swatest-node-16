module.exports = async function (context, req) {
  const date = "2023-06-12T19:06:18.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

