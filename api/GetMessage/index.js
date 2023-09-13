module.exports = async function (context, req) {
  const date = "2023-09-13T21:06:15.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

