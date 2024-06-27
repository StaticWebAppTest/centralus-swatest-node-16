module.exports = async function (context, req) {
  const date = "2024-06-27T02:29:20.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

