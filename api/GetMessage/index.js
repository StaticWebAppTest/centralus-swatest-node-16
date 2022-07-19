module.exports = async function (context, req) {
  const date = "2022-07-19T14:10:36.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

