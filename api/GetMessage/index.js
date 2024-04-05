module.exports = async function (context, req) {
  const date = "2024-04-05T14:10:50.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

