module.exports = async function (context, req) {
  const date = "2024-04-30T05:09:09.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

