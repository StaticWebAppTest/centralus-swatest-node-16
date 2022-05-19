module.exports = async function (context, req) {
  const date = "2022-05-19T18:21:21.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

