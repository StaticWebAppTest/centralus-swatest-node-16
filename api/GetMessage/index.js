module.exports = async function (context, req) {
  const date = "2023-12-07T01:52:18.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

