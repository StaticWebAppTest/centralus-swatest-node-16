module.exports = async function (context, req) {
  const date = "2022-10-15T07:17:47.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

