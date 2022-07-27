module.exports = async function (context, req) {
  const date = "2022-07-27T14:12:12.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

