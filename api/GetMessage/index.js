module.exports = async function (context, req) {
  const date = "2024-11-03T04:14:10.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

