module.exports = async function (context, req) {
  const date = "2022-06-14T21:09:44.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

