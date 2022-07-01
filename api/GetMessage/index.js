module.exports = async function (context, req) {
  const date = "2022-07-01T17:17:28.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

