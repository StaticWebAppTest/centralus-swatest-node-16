module.exports = async function (context, req) {
  const date = "2024-04-21T04:11:03.569Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

