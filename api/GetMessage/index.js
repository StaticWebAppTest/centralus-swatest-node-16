module.exports = async function (context, req) {
  const date = "2023-12-09T20:08:58.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

