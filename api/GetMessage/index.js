module.exports = async function (context, req) {
  const date = "2023-11-30T03:09:36.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

