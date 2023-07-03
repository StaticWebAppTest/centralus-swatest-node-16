module.exports = async function (context, req) {
  const date = "2023-07-03T21:08:56.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

