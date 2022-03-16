module.exports = async function (context, req) {
  const date = "2022-03-16T19:08:08.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

