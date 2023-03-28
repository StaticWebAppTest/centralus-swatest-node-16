module.exports = async function (context, req) {
  const date = "2023-03-28T07:08:49.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

