module.exports = async function (context, req) {
  const date = "2023-05-25T19:06:53.402Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

