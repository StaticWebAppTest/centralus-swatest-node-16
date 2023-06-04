module.exports = async function (context, req) {
  const date = "2023-06-04T01:02:33.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

