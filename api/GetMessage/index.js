module.exports = async function (context, req) {
  const date = "2024-04-24T20:10:02.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

