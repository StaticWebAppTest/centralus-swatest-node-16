module.exports = async function (context, req) {
  const date = "2022-09-23T14:24:51.834Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

