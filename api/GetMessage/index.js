module.exports = async function (context, req) {
  const date = "2023-05-03T21:08:11.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

