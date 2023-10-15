module.exports = async function (context, req) {
  const date = "2023-10-15T14:07:06.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

