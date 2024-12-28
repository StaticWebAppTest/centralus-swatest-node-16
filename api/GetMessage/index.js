module.exports = async function (context, req) {
  const date = "2024-12-28T04:14:10.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

