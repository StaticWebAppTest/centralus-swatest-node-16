module.exports = async function (context, req) {
  const date = "2022-07-31T10:11:18.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

