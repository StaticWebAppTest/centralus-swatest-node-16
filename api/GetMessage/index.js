module.exports = async function (context, req) {
  const date = "2024-04-03T20:11:08.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

