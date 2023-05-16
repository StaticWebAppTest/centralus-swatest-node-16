module.exports = async function (context, req) {
  const date = "2023-05-16T23:08:16.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

