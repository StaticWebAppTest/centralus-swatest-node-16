module.exports = async function (context, req) {
  const date = "2023-06-11T05:08:21.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

