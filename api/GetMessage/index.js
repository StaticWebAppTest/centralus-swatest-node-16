module.exports = async function (context, req) {
  const date = "2023-03-20T21:07:53.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

