module.exports = async function (context, req) {
  const date = "2023-11-03T05:08:42.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

