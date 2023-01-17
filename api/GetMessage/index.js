module.exports = async function (context, req) {
  const date = "2023-01-17T21:08:33.369Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

