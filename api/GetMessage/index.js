module.exports = async function (context, req) {
  const date = "2023-04-20T06:12:00.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

