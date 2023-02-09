module.exports = async function (context, req) {
  const date = "2023-02-09T15:10:24.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

