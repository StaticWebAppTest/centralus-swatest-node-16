module.exports = async function (context, req) {
  const date = "2023-10-19T23:08:48.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

