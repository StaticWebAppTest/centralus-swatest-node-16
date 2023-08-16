module.exports = async function (context, req) {
  const date = "2023-08-16T13:10:38.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

