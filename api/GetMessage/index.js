module.exports = async function (context, req) {
  const date = "2023-08-12T11:06:11.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

