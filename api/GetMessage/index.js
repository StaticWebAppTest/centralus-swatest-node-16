module.exports = async function (context, req) {
  const date = "2022-11-23T21:09:02.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

