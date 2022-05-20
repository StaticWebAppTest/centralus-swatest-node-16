module.exports = async function (context, req) {
  const date = "2022-05-20T09:12:16.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

