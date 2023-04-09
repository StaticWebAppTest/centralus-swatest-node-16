module.exports = async function (context, req) {
  const date = "2023-04-09T06:10:34.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

