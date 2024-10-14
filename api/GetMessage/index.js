module.exports = async function (context, req) {
  const date = "2024-10-14T05:12:20.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

