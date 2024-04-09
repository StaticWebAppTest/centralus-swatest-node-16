module.exports = async function (context, req) {
  const date = "2024-04-09T07:10:38.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

