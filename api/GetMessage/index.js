module.exports = async function (context, req) {
  const date = "2022-06-16T18:13:05.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

