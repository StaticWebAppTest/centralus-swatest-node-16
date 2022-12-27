module.exports = async function (context, req) {
  const date = "2022-12-27T11:07:37.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

