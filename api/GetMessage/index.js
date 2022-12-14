module.exports = async function (context, req) {
  const date = "2022-12-14T09:09:47.406Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

