module.exports = async function (context, req) {
  const date = "2022-12-23T19:07:31.834Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

