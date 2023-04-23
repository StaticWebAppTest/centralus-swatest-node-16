module.exports = async function (context, req) {
  const date = "2023-04-23T17:07:19.362Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

