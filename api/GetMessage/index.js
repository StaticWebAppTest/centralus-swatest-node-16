module.exports = async function (context, req) {
  const date = "2023-12-01T07:08:55.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

