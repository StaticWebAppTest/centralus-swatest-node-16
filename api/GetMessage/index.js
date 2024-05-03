module.exports = async function (context, req) {
  const date = "2024-05-03T08:11:52.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

