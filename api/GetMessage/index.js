module.exports = async function (context, req) {
  const date = "2023-05-15T06:11:53.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

