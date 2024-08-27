module.exports = async function (context, req) {
  const date = "2024-08-27T22:10:39.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

