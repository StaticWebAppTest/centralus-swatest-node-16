module.exports = async function (context, req) {
  const date = "2023-02-23T16:13:51.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

