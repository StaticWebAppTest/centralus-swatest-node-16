module.exports = async function (context, req) {
  const date = "2024-06-21T02:27:28.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

