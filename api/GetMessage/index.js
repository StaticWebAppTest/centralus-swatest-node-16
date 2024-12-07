module.exports = async function (context, req) {
  const date = "2024-12-07T17:09:42.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

