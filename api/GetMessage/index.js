module.exports = async function (context, req) {
  const date = "2022-07-25T17:18:47.406Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

