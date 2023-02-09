module.exports = async function (context, req) {
  const date = "2023-02-09T21:08:57.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

