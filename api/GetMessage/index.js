module.exports = async function (context, req) {
  const date = "2024-06-05T09:12:58.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

