module.exports = async function (context, req) {
  const date = "2024-03-22T02:15:14.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

