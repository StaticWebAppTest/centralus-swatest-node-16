module.exports = async function (context, req) {
  const date = "2022-12-10T03:09:58.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

