module.exports = async function (context, req) {
  const date = "2022-05-31T02:59:07.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

