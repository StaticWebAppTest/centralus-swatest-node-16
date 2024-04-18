module.exports = async function (context, req) {
  const date = "2024-04-18T11:07:33.552Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

