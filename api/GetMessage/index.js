module.exports = async function (context, req) {
  const date = "2022-12-09T14:08:52.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

