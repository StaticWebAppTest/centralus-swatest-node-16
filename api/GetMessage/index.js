module.exports = async function (context, req) {
  const date = "2023-08-13T12:13:57.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

