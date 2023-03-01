module.exports = async function (context, req) {
  const date = "2023-03-01T15:10:58.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

