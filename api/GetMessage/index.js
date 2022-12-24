module.exports = async function (context, req) {
  const date = "2022-12-24T00:42:57.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

