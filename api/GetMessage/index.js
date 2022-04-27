module.exports = async function (context, req) {
  const date = "2022-04-27T17:20:22.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

