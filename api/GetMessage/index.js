module.exports = async function (context, req) {
  const date = "2023-03-20T12:19:02.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

