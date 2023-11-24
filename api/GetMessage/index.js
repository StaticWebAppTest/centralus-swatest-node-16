module.exports = async function (context, req) {
  const date = "2023-11-24T15:09:02.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

