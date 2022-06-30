module.exports = async function (context, req) {
  const date = "2022-06-30T15:11:39.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

