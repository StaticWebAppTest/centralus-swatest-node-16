module.exports = async function (context, req) {
  const date = "2023-03-27T20:11:16.576Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

