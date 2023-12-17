module.exports = async function (context, req) {
  const date = "2023-12-17T08:10:55.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

