module.exports = async function (context, req) {
  const date = "2024-09-11T05:11:02.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

