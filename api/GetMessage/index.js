module.exports = async function (context, req) {
  const date = "2023-12-14T03:10:07.369Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

