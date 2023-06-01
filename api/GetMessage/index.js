module.exports = async function (context, req) {
  const date = "2023-06-01T21:07:19.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

