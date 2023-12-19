module.exports = async function (context, req) {
  const date = "2023-12-19T20:08:19.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

