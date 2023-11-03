module.exports = async function (context, req) {
  const date = "2023-11-03T23:08:21.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

