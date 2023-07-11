module.exports = async function (context, req) {
  const date = "2023-07-11T17:08:50.743Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

