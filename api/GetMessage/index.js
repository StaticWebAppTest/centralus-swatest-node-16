module.exports = async function (context, req) {
  const date = "2022-09-13T19:09:39.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

