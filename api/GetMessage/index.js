module.exports = async function (context, req) {
  const date = "2023-08-06T20:08:02.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

