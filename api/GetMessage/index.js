module.exports = async function (context, req) {
  const date = "2022-09-17T09:11:51.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

