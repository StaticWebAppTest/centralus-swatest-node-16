module.exports = async function (context, req) {
  const date = "2024-03-30T05:08:58.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

