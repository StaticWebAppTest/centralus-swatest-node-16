module.exports = async function (context, req) {
  const date = "2023-03-08T05:09:53.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

