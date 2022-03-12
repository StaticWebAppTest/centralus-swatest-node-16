module.exports = async function (context, req) {
  const date = "2022-03-12T21:09:06.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

