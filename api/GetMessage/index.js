module.exports = async function (context, req) {
  const date = "2024-03-11T03:11:06.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

