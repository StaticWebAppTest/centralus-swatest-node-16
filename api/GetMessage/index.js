module.exports = async function (context, req) {
  const date = "2024-04-23T14:08:59.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

