module.exports = async function (context, req) {
  const date = "2023-04-30T21:07:33.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

