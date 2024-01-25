module.exports = async function (context, req) {
  const date = "2024-01-25T05:09:31.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

