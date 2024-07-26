module.exports = async function (context, req) {
  const date = "2024-07-26T05:11:23.006Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

