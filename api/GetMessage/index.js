module.exports = async function (context, req) {
  const date = "2024-10-11T12:21:49.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

