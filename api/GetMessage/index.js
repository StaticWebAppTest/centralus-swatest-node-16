module.exports = async function (context, req) {
  const date = "2023-11-16T21:08:12.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

