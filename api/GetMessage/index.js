module.exports = async function (context, req) {
  const date = "2022-12-23T21:08:05.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

