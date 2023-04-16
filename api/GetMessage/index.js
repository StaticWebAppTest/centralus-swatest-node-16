module.exports = async function (context, req) {
  const date = "2023-04-16T23:08:08.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

