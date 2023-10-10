module.exports = async function (context, req) {
  const date = "2023-10-10T17:08:04.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

