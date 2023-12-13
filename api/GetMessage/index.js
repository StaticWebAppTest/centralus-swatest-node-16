module.exports = async function (context, req) {
  const date = "2023-12-13T06:12:38.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

