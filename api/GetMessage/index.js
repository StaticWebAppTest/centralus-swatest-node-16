module.exports = async function (context, req) {
  const date = "2023-03-07T23:10:47.576Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

