module.exports = async function (context, req) {
  const date = "2024-05-09T08:12:49.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

