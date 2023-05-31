module.exports = async function (context, req) {
  const date = "2023-05-31T05:08:00.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

