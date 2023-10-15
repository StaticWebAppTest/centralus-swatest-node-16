module.exports = async function (context, req) {
  const date = "2023-10-15T01:50:23.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

