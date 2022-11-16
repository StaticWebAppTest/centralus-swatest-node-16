module.exports = async function (context, req) {
  const date = "2022-11-16T19:10:51.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

