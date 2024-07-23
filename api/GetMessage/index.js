module.exports = async function (context, req) {
  const date = "2024-07-23T05:10:24.646Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

