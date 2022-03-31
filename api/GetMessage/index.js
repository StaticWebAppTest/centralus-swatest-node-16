module.exports = async function (context, req) {
  const date = "2022-03-31T09:11:36.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

