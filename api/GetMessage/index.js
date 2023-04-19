module.exports = async function (context, req) {
  const date = "2023-04-19T12:16:47.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

