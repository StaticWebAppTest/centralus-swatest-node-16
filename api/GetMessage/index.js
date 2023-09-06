module.exports = async function (context, req) {
  const date = "2023-09-06T07:08:32.667Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

