module.exports = async function (context, req) {
  const date = "2023-09-13T19:07:02.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

