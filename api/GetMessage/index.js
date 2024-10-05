module.exports = async function (context, req) {
  const date = "2024-10-05T14:09:31.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

