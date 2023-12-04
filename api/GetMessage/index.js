module.exports = async function (context, req) {
  const date = "2023-12-04T20:09:53.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

