module.exports = async function (context, req) {
  const date = "2023-09-25T17:08:15.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

