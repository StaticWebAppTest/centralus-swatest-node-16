module.exports = async function (context, req) {
  const date = "2022-03-12T03:10:26.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

