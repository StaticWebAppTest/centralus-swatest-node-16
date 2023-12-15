module.exports = async function (context, req) {
  const date = "2023-12-15T07:08:53.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

