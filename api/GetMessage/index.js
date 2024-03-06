module.exports = async function (context, req) {
  const date = "2024-03-06T05:08:43.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

