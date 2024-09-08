module.exports = async function (context, req) {
  const date = "2024-09-08T20:11:14.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

