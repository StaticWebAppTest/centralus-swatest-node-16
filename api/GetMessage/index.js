module.exports = async function (context, req) {
  const date = "2023-01-24T02:11:21.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

