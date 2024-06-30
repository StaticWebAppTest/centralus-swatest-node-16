module.exports = async function (context, req) {
  const date = "2024-06-30T09:12:38.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

