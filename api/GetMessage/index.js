module.exports = async function (context, req) {
  const date = "2023-12-06T14:08:47.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

