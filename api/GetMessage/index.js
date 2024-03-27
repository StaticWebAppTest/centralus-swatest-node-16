module.exports = async function (context, req) {
  const date = "2024-03-27T04:13:03.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

