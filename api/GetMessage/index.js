module.exports = async function (context, req) {
  const date = "2024-07-03T22:10:05.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

