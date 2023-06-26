module.exports = async function (context, req) {
  const date = "2023-06-26T16:12:40.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

