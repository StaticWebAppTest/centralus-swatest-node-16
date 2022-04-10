module.exports = async function (context, req) {
  const date = "2022-04-10T21:09:02.743Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

