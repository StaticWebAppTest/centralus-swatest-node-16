module.exports = async function (context, req) {
  const date = "2022-10-14T14:32:14.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

