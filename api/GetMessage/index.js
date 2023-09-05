module.exports = async function (context, req) {
  const date = "2023-09-05T15:08:57.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

