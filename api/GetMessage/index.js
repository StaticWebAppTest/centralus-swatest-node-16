module.exports = async function (context, req) {
  const date = "2024-06-04T07:09:55.569Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

