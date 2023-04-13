module.exports = async function (context, req) {
  const date = "2023-04-13T23:08:44.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

