module.exports = async function (context, req) {
  const date = "2023-09-20T08:11:42.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

