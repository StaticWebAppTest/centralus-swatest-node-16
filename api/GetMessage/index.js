module.exports = async function (context, req) {
  const date = "2022-06-12T19:08:08.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

