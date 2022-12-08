module.exports = async function (context, req) {
  const date = "2022-12-08T08:12:56.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

