module.exports = async function (context, req) {
  const date = "2023-09-03T20:08:21.085Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

