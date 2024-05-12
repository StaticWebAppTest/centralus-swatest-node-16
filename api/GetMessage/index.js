module.exports = async function (context, req) {
  const date = "2024-05-12T21:09:27.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

