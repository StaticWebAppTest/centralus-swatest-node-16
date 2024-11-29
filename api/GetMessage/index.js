module.exports = async function (context, req) {
  const date = "2024-11-29T05:12:30.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

