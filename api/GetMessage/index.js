module.exports = async function (context, req) {
  const date = "2022-09-10T01:08:36.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

