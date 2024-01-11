module.exports = async function (context, req) {
  const date = "2024-01-11T02:24:52.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

