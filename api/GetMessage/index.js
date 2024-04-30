module.exports = async function (context, req) {
  const date = "2024-04-30T00:42:52.143Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

