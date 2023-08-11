module.exports = async function (context, req) {
  const date = "2023-08-11T13:10:01.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

