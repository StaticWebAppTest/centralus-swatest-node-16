module.exports = async function (context, req) {
  const date = "2024-12-25T08:15:18.305Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

