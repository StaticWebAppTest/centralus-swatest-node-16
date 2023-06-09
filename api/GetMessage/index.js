module.exports = async function (context, req) {
  const date = "2023-06-09T19:06:54.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

