module.exports = async function (context, req) {
  const date = "2023-03-22T14:08:58.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

