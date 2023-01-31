module.exports = async function (context, req) {
  const date = "2023-01-31T16:13:08.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

