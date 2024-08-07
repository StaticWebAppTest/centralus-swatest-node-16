module.exports = async function (context, req) {
  const date = "2024-08-07T05:10:33.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

