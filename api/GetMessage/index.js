module.exports = async function (context, req) {
  const date = "2022-08-20T09:10:33.188Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

