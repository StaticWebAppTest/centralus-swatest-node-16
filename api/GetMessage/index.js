module.exports = async function (context, req) {
  const date = "2023-12-06T16:12:35.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

