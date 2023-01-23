module.exports = async function (context, req) {
  const date = "2023-01-23T04:12:00.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

