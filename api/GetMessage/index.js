module.exports = async function (context, req) {
  const date = "2024-04-13T23:10:15.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

