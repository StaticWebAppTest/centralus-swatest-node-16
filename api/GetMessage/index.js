module.exports = async function (context, req) {
  const date = "2023-06-27T17:09:05.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

