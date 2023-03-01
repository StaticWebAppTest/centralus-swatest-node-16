module.exports = async function (context, req) {
  const date = "2023-03-01T09:10:48.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

