module.exports = async function (context, req) {
  const date = "2023-07-09T17:08:19.743Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

