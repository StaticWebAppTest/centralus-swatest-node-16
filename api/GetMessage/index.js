module.exports = async function (context, req) {
  const date = "2023-08-08T22:08:32.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

