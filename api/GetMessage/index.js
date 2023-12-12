module.exports = async function (context, req) {
  const date = "2023-12-12T21:08:20.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

