module.exports = async function (context, req) {
  const date = "2022-06-03T11:08:40.406Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

