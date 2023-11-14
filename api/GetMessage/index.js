module.exports = async function (context, req) {
  const date = "2023-11-14T06:12:13.462Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

