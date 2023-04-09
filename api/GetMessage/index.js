module.exports = async function (context, req) {
  const date = "2023-04-09T17:07:09.743Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

