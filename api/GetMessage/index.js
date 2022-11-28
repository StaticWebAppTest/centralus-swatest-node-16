module.exports = async function (context, req) {
  const date = "2022-11-28T00:51:52.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

