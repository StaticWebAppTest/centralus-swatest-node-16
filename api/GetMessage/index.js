module.exports = async function (context, req) {
  const date = "2024-05-29T22:09:39.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

