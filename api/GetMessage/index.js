module.exports = async function (context, req) {
  const date = "2022-05-12T21:09:06.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

