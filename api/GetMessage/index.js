module.exports = async function (context, req) {
  const date = "2023-04-03T01:57:32.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

