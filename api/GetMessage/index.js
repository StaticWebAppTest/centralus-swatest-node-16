module.exports = async function (context, req) {
  const date = "2022-12-09T02:16:06.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

