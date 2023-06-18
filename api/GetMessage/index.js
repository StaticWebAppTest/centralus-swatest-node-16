module.exports = async function (context, req) {
  const date = "2023-06-18T22:07:43.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

