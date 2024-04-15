module.exports = async function (context, req) {
  const date = "2024-04-15T08:10:15.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

