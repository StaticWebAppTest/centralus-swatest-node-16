module.exports = async function (context, req) {
  const date = "2022-03-27T02:18:18.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

