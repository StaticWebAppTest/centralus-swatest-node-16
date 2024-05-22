module.exports = async function (context, req) {
  const date = "2024-05-22T13:12:02.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

