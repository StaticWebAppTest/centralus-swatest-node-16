module.exports = async function (context, req) {
  const date = "2023-06-27T14:08:58.893Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

