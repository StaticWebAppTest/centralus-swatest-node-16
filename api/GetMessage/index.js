module.exports = async function (context, req) {
  const date = "2024-02-18T05:08:17.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

