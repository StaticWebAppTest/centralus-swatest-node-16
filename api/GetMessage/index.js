module.exports = async function (context, req) {
  const date = "2024-09-07T22:09:24.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

