module.exports = async function (context, req) {
  const date = "2022-07-12T12:27:38.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

