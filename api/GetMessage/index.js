module.exports = async function (context, req) {
  const date = "2022-12-01T08:13:50.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

