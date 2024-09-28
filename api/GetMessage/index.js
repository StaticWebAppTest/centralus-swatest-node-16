module.exports = async function (context, req) {
  const date = "2024-09-28T05:10:43.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

