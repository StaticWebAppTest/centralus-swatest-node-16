module.exports = async function (context, req) {
  const date = "2023-01-29T20:09:03.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

