module.exports = async function (context, req) {
  const date = "2022-11-05T01:04:27.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

