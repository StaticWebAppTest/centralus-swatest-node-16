module.exports = async function (context, req) {
  const date = "2024-01-23T06:13:00.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

