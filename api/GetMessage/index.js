module.exports = async function (context, req) {
  const date = "2023-06-11T08:10:13.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

