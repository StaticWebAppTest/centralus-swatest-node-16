module.exports = async function (context, req) {
  const date = "2024-07-19T10:10:40.055Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

