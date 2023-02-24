module.exports = async function (context, req) {
  const date = "2023-02-24T09:10:06.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

