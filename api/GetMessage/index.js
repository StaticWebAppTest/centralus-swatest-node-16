module.exports = async function (context, req) {
  const date = "2024-06-14T16:11:58.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

