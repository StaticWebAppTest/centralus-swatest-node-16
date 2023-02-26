module.exports = async function (context, req) {
  const date = "2023-02-26T06:12:27.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

