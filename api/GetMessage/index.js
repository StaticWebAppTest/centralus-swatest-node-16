module.exports = async function (context, req) {
  const date = "2024-07-24T12:19:03.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

