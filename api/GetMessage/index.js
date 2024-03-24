module.exports = async function (context, req) {
  const date = "2024-03-24T04:11:11.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

