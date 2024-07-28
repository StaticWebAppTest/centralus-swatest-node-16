module.exports = async function (context, req) {
  const date = "2024-07-28T14:08:58.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

