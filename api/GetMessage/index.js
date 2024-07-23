module.exports = async function (context, req) {
  const date = "2024-07-23T18:13:52.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

