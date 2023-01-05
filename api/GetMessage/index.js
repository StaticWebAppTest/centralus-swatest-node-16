module.exports = async function (context, req) {
  const date = "2023-01-05T19:07:46.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

