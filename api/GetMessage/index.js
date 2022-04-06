module.exports = async function (context, req) {
  const date = "2022-04-06T12:19:22.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

