module.exports = async function (context, req) {
  const date = "2022-08-23T05:48:53.074Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

