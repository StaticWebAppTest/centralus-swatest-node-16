module.exports = async function (context, req) {
  const date = "2024-04-28T14:07:38.851Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

