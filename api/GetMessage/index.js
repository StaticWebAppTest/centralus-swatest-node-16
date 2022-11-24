module.exports = async function (context, req) {
  const date = "2022-11-24T03:20:49.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

