module.exports = async function (context, req) {
  const date = "2023-06-18T08:10:13.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

