module.exports = async function (context, req) {
  const date = "2024-07-30T05:11:45.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

