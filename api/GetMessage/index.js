module.exports = async function (context, req) {
  const date = "2022-04-12T09:10:42.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

