module.exports = async function (context, req) {
  const date = "2023-09-09T18:09:38.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

