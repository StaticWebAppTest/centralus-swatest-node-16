module.exports = async function (context, req) {
  const date = "2023-04-01T08:10:54.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

