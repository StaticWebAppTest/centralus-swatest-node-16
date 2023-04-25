module.exports = async function (context, req) {
  const date = "2023-04-25T08:11:53.514Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

