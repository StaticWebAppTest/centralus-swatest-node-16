module.exports = async function (context, req) {
  const date = "2023-12-09T19:06:40.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

