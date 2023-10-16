module.exports = async function (context, req) {
  const date = "2023-10-16T21:08:12.324Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

