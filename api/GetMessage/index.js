module.exports = async function (context, req) {
  const date = "2022-04-20T03:09:53.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

