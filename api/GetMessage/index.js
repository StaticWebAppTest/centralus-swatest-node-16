module.exports = async function (context, req) {
  const date = "2024-07-25T09:12:18.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

