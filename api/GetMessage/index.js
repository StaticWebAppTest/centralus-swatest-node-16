module.exports = async function (context, req) {
  const date = "2022-10-09T08:16:31.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

