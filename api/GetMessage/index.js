module.exports = async function (context, req) {
  const date = "2022-10-14T22:12:45.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

