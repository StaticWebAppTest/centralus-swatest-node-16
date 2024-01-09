module.exports = async function (context, req) {
  const date = "2024-01-09T06:12:40.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

