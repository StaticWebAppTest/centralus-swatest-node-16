module.exports = async function (context, req) {
  const date = "2024-05-07T02:27:20.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

