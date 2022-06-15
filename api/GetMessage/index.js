module.exports = async function (context, req) {
  const date = "2022-06-15T11:09:47.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

