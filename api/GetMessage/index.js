module.exports = async function (context, req) {
  const date = "2023-03-30T23:09:31.369Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

