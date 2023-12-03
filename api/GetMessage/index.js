module.exports = async function (context, req) {
  const date = "2023-12-03T15:08:02.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

