module.exports = async function (context, req) {
  const date = "2023-10-30T03:09:49.649Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

