module.exports = async function (context, req) {
  const date = "2022-07-20T05:19:03.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

