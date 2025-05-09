module.exports = async function (context, req) {
  const date = "2025-05-09T07:13:08.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

