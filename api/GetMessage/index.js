module.exports = async function (context, req) {
  const date = "2023-05-05T17:07:48.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

