module.exports = async function (context, req) {
  const date = "2023-05-26T20:08:49.838Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

