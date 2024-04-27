module.exports = async function (context, req) {
  const date = "2024-04-27T11:06:55.552Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

