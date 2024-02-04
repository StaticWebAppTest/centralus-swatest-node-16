module.exports = async function (context, req) {
  const date = "2024-02-04T18:11:40.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

