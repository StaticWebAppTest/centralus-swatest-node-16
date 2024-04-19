module.exports = async function (context, req) {
  const date = "2024-04-19T15:10:06.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

