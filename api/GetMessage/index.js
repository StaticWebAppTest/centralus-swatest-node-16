module.exports = async function (context, req) {
  const date = "2023-05-15T07:08:57.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

