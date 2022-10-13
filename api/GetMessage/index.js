module.exports = async function (context, req) {
  const date = "2022-10-13T21:13:52.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

