module.exports = async function (context, req) {
  const date = "2023-11-27T00:43:35.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

