module.exports = async function (context, req) {
  const date = "2023-08-13T17:06:50.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

