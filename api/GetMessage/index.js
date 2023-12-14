module.exports = async function (context, req) {
  const date = "2023-12-14T09:09:31.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

