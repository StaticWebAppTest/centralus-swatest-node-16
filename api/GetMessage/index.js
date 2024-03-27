module.exports = async function (context, req) {
  const date = "2024-03-27T16:12:43.317Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

