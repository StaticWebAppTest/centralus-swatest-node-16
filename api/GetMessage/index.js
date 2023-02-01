module.exports = async function (context, req) {
  const date = "2023-02-01T04:12:05.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

