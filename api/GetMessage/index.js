module.exports = async function (context, req) {
  const date = "2024-03-15T09:09:11.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

