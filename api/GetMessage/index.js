module.exports = async function (context, req) {
  const date = "2022-04-18T18:13:36.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

