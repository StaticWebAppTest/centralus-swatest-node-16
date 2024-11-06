module.exports = async function (context, req) {
  const date = "2024-11-06T21:11:23.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

