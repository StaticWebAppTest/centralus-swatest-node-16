module.exports = async function (context, req) {
  const date = "2024-12-18T06:17:27.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

