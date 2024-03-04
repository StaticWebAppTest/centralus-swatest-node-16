module.exports = async function (context, req) {
  const date = "2024-03-04T07:55:42.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

