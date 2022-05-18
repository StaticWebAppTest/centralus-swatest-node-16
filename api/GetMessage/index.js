module.exports = async function (context, req) {
  const date = "2022-05-18T13:35:56.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

