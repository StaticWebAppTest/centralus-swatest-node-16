module.exports = async function (context, req) {
  const date = "2023-11-25T19:06:34.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

