module.exports = async function (context, req) {
  const date = "2023-12-29T22:08:39.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

