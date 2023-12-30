module.exports = async function (context, req) {
  const date = "2023-12-30T19:06:44.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

