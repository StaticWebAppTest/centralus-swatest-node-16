module.exports = async function (context, req) {
  const date = "2023-08-03T05:08:16.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

