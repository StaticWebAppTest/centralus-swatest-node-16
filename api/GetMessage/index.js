module.exports = async function (context, req) {
  const date = "2024-07-07T20:09:52.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

