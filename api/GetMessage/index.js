module.exports = async function (context, req) {
  const date = "2023-12-04T03:10:10.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

