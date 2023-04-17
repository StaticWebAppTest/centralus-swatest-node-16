module.exports = async function (context, req) {
  const date = "2023-04-17T23:08:47.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

