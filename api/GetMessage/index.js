module.exports = async function (context, req) {
  const date = "2023-01-05T15:11:05.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

