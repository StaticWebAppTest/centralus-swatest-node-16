module.exports = async function (context, req) {
  const date = "2022-06-25T03:07:12.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

