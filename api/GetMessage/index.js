module.exports = async function (context, req) {
  const date = "2024-07-11T22:09:51.636Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

