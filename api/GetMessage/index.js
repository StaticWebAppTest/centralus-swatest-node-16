module.exports = async function (context, req) {
  const date = "2023-12-26T17:08:04.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

