module.exports = async function (context, req) {
  const date = "2023-07-18T16:13:20.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

