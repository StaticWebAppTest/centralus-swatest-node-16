module.exports = async function (context, req) {
  const date = "2023-03-06T21:09:18.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

