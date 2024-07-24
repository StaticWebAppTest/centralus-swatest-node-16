module.exports = async function (context, req) {
  const date = "2024-07-24T21:10:33.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

