module.exports = async function (context, req) {
  const date = "2022-11-12T21:10:10.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

