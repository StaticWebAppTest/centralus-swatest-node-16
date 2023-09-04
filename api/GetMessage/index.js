module.exports = async function (context, req) {
  const date = "2023-09-04T20:08:37.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

