module.exports = async function (context, req) {
  const date = "2023-07-11T23:09:24.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

