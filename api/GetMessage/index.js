module.exports = async function (context, req) {
  const date = "2024-04-01T20:10:21.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

