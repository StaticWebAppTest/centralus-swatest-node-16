module.exports = async function (context, req) {
  const date = "2024-04-25T12:14:27.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

