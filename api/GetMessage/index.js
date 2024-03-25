module.exports = async function (context, req) {
  const date = "2024-03-25T04:12:11.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

