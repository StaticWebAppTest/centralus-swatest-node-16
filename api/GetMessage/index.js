module.exports = async function (context, req) {
  const date = "2022-12-06T11:08:19.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

