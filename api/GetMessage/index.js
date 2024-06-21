module.exports = async function (context, req) {
  const date = "2024-06-21T20:11:30.576Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

