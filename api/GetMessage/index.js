module.exports = async function (context, req) {
  const date = "2023-03-13T20:10:36.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

