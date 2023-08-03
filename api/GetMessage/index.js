module.exports = async function (context, req) {
  const date = "2023-08-03T14:08:06.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

