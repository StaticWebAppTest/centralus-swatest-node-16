module.exports = async function (context, req) {
  const date = "2022-09-11T21:10:59.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

