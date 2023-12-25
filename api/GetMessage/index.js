module.exports = async function (context, req) {
  const date = "2023-12-25T14:08:23.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

