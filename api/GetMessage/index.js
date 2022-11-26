module.exports = async function (context, req) {
  const date = "2022-11-26T15:09:21.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

