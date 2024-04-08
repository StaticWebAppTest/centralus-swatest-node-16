module.exports = async function (context, req) {
  const date = "2024-04-08T00:43:06.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

