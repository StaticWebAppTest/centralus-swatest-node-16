module.exports = async function (context, req) {
  const date = "2024-05-29T06:13:39.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

