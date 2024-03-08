module.exports = async function (context, req) {
  const date = "2024-03-08T20:08:52.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

