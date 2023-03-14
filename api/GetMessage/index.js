module.exports = async function (context, req) {
  const date = "2023-03-14T06:13:34.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

