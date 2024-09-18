module.exports = async function (context, req) {
  const date = "2024-09-18T16:14:08.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

