module.exports = async function (context, req) {
  const date = "2022-05-12T17:20:44.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

