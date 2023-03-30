module.exports = async function (context, req) {
  const date = "2023-03-30T12:18:27.576Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

