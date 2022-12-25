module.exports = async function (context, req) {
  const date = "2022-12-25T07:07:55.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

