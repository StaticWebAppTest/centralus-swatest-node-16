module.exports = async function (context, req) {
  const date = "2023-08-22T21:07:32.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

