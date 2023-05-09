module.exports = async function (context, req) {
  const date = "2023-05-09T06:11:54.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

