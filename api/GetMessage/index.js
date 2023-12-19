module.exports = async function (context, req) {
  const date = "2023-12-19T06:12:28.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

