module.exports = async function (context, req) {
  const date = "2024-06-18T21:09:21.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

