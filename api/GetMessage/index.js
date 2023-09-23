module.exports = async function (context, req) {
  const date = "2023-09-23T17:06:55.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

