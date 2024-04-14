module.exports = async function (context, req) {
  const date = "2024-04-14T22:02:15.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

