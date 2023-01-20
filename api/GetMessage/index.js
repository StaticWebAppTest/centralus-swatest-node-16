module.exports = async function (context, req) {
  const date = "2023-01-20T04:12:05.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

