module.exports = async function (context, req) {
  const date = "2023-12-20T03:08:02.144Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

