module.exports = async function (context, req) {
  const date = "2024-05-14T05:10:29.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

