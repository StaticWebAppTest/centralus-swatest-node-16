module.exports = async function (context, req) {
  const date = "2024-08-09T04:13:06.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

