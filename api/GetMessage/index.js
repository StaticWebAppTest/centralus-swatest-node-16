module.exports = async function (context, req) {
  const date = "2022-03-10T19:08:05.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

