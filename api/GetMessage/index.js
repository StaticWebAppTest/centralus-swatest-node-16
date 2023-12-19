module.exports = async function (context, req) {
  const date = "2023-12-19T10:09:45.369Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

