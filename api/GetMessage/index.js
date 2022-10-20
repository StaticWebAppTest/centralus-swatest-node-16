module.exports = async function (context, req) {
  const date = "2022-10-20T03:59:07.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

