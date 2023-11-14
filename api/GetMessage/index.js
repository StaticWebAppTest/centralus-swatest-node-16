module.exports = async function (context, req) {
  const date = "2023-11-14T15:09:33.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

