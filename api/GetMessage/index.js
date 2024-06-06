module.exports = async function (context, req) {
  const date = "2024-06-06T11:09:02.369Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

