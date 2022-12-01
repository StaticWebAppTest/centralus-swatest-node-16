module.exports = async function (context, req) {
  const date = "2022-12-01T02:50:06.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

