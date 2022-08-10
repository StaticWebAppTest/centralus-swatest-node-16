module.exports = async function (context, req) {
  const date = "2022-08-10T17:17:53.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

