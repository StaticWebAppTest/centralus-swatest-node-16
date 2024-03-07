module.exports = async function (context, req) {
  const date = "2024-03-07T04:10:27.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

