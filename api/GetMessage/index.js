module.exports = async function (context, req) {
  const date = "2022-09-15T18:15:03.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

