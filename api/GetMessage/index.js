module.exports = async function (context, req) {
  const date = "2023-11-09T05:08:47.646Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

