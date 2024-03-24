module.exports = async function (context, req) {
  const date = "2024-03-24T22:09:37.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

