module.exports = async function (context, req) {
  const date = "2024-04-26T07:10:21.127Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

