module.exports = async function (context, req) {
  const date = "2024-03-06T04:10:40.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

