module.exports = async function (context, req) {
  const date = "2023-05-14T11:06:34.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

