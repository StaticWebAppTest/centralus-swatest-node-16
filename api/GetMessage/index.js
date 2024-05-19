module.exports = async function (context, req) {
  const date = "2024-05-19T06:12:20.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

