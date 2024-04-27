module.exports = async function (context, req) {
  const date = "2024-04-27T17:08:28.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

