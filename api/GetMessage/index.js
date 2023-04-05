module.exports = async function (context, req) {
  const date = "2023-04-05T07:08:53.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

