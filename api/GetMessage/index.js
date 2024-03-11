module.exports = async function (context, req) {
  const date = "2024-03-11T22:08:21.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

