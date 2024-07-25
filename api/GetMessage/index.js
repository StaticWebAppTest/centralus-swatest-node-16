module.exports = async function (context, req) {
  const date = "2024-07-25T02:36:50.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

