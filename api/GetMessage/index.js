module.exports = async function (context, req) {
  const date = "2024-05-11T23:09:38.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

