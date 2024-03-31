module.exports = async function (context, req) {
  const date = "2024-03-31T04:12:30.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

