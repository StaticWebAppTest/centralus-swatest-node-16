module.exports = async function (context, req) {
  const date = "2023-06-09T11:07:23.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

