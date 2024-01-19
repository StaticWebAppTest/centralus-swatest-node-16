module.exports = async function (context, req) {
  const date = "2024-01-19T07:09:03.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

