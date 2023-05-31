module.exports = async function (context, req) {
  const date = "2023-05-31T21:07:53.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

