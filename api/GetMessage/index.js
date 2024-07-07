module.exports = async function (context, req) {
  const date = "2024-07-07T02:03:55.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

