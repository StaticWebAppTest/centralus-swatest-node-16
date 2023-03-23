module.exports = async function (context, req) {
  const date = "2023-03-23T14:08:56.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

