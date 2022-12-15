module.exports = async function (context, req) {
  const date = "2022-12-15T09:09:56.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

