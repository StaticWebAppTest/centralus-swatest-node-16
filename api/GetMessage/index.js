module.exports = async function (context, req) {
  const date = "2022-12-19T05:09:03.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

