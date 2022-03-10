module.exports = async function (context, req) {
  const date = "2022-03-10T12:17:01.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

