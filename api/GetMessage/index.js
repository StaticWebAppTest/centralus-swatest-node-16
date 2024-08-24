module.exports = async function (context, req) {
  const date = "2024-08-24T07:09:05.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

