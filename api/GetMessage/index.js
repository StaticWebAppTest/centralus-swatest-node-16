module.exports = async function (context, req) {
  const date = "2023-09-14T15:09:23.406Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

