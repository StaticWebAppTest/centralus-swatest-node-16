module.exports = async function (context, req) {
  const date = "2022-03-31T16:13:56.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

