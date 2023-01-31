module.exports = async function (context, req) {
  const date = "2023-01-31T13:20:50.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

