module.exports = async function (context, req) {
  const date = "2024-07-14T18:21:00.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

