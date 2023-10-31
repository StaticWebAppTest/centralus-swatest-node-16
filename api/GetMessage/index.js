module.exports = async function (context, req) {
  const date = "2023-10-31T14:08:28.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

