module.exports = async function (context, req) {
  const date = "2022-10-27T15:12:27.743Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

