module.exports = async function (context, req) {
  const date = "2024-05-23T06:14:26.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

