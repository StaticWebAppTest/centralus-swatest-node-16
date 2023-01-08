module.exports = async function (context, req) {
  const date = "2023-01-08T17:07:33.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

