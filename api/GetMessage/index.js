module.exports = async function (context, req) {
  const date = "2022-05-14T09:10:41.511Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

