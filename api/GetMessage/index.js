module.exports = async function (context, req) {
  const date = "2022-11-05T13:22:42.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

