module.exports = async function (context, req) {
  const date = "2024-01-04T15:10:00.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

