module.exports = async function (context, req) {
  const date = "2023-05-20T08:09:55.118Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

