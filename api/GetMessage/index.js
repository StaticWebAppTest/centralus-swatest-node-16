module.exports = async function (context, req) {
  const date = "2024-03-05T16:10:56.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

