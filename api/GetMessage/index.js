module.exports = async function (context, req) {
  const date = "2022-05-19T03:20:21.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

