module.exports = async function (context, req) {
  const date = "2023-05-12T02:27:58.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

