module.exports = async function (context, req) {
  const date = "2022-03-13T19:07:51.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

