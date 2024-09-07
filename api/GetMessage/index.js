module.exports = async function (context, req) {
  const date = "2024-09-07T18:13:23.513Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

