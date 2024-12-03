module.exports = async function (context, req) {
  const date = "2024-12-03T04:14:55.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

