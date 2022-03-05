module.exports = async function (context, req) {
  const date = "2022-03-05T21:08:32.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

