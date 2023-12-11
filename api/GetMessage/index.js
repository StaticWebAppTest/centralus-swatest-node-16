module.exports = async function (context, req) {
  const date = "2023-12-11T06:12:58.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

