module.exports = async function (context, req) {
  const date = "2022-06-11T00:52:58.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

