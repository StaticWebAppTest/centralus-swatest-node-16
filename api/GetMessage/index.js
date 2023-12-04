module.exports = async function (context, req) {
  const date = "2023-12-04T21:07:26.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

