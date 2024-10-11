module.exports = async function (context, req) {
  const date = "2024-10-11T10:11:58.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

