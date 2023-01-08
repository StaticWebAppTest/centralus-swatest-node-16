module.exports = async function (context, req) {
  const date = "2023-01-08T23:09:08.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

