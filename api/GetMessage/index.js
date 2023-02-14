module.exports = async function (context, req) {
  const date = "2023-02-14T20:10:23.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

