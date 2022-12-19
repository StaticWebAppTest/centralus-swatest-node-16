module.exports = async function (context, req) {
  const date = "2022-12-19T15:12:07.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

