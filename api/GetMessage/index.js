module.exports = async function (context, req) {
  const date = "2023-09-09T12:14:06.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

