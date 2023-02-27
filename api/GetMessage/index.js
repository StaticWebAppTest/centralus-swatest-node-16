module.exports = async function (context, req) {
  const date = "2023-02-27T04:12:38.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

