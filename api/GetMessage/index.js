module.exports = async function (context, req) {
  const date = "2024-04-27T12:14:55.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

