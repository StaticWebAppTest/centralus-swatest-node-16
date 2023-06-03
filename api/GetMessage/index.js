module.exports = async function (context, req) {
  const date = "2023-06-03T21:07:04.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

