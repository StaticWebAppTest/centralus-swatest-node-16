module.exports = async function (context, req) {
  const date = "2024-07-27T20:10:20.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

