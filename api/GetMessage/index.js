module.exports = async function (context, req) {
  const date = "2023-03-24T16:12:21.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

