module.exports = async function (context, req) {
  const date = "2024-05-11T08:11:48.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

