module.exports = async function (context, req) {
  const date = "2022-02-25T15:10:03.760Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

