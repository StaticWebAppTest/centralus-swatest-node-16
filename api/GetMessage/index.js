module.exports = async function (context, req) {
  const date = "2023-07-27T01:53:47.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

