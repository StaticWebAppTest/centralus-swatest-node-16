module.exports = async function (context, req) {
  const date = "2022-04-12T17:14:00.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

