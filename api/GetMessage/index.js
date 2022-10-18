module.exports = async function (context, req) {
  const date = "2022-10-18T13:52:05.743Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

