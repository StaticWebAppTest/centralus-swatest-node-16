module.exports = async function (context, req) {
  const date = "2022-08-19T17:19:54.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

