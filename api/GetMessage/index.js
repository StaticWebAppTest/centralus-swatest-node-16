module.exports = async function (context, req) {
  const date = "2023-06-23T18:12:31.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

