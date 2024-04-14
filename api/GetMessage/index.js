module.exports = async function (context, req) {
  const date = "2024-04-14T04:33:51.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

