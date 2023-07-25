module.exports = async function (context, req) {
  const date = "2023-07-25T03:09:20.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

