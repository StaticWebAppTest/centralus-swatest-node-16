module.exports = async function (context, req) {
  const date = "2022-06-16T19:12:23.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

