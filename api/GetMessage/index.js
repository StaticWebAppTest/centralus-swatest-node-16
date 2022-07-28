module.exports = async function (context, req) {
  const date = "2022-07-28T14:13:47.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

