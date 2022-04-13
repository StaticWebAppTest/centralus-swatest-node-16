module.exports = async function (context, req) {
  const date = "2022-04-13T02:40:19.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

