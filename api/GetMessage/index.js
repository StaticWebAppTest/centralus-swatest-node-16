module.exports = async function (context, req) {
  const date = "2023-09-05T11:07:05.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

