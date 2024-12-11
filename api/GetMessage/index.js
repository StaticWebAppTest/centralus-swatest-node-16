module.exports = async function (context, req) {
  const date = "2024-12-11T05:12:45.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

