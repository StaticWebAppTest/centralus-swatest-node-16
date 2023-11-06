module.exports = async function (context, req) {
  const date = "2023-11-06T03:09:54.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

