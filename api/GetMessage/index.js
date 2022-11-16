module.exports = async function (context, req) {
  const date = "2022-11-16T14:09:58.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

