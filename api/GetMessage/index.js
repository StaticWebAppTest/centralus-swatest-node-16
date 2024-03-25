module.exports = async function (context, req) {
  const date = "2024-03-25T09:09:29.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

