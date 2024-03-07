module.exports = async function (context, req) {
  const date = "2024-03-07T01:26:20.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

