module.exports = async function (context, req) {
  const date = "2023-12-26T21:07:51.398Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

