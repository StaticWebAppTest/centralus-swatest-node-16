module.exports = async function (context, req) {
  const date = "2023-09-23T20:08:04.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

