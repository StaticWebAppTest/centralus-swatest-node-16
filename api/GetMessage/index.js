module.exports = async function (context, req) {
  const date = "2024-02-07T20:09:01.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

