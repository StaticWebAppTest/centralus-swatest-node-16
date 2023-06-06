module.exports = async function (context, req) {
  const date = "2023-06-06T20:08:54.667Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

