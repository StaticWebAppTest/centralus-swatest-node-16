module.exports = async function (context, req) {
  const date = "2022-12-18T22:08:06.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

