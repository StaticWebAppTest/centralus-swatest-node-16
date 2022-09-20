module.exports = async function (context, req) {
  const date = "2022-09-20T04:10:12.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

