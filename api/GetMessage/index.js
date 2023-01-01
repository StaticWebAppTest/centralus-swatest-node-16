module.exports = async function (context, req) {
  const date = "2023-01-01T19:07:06.932Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

