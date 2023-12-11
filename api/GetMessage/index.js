module.exports = async function (context, req) {
  const date = "2023-12-11T07:09:13.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

