module.exports = async function (context, req) {
  const date = "2023-12-15T06:12:32.339Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

