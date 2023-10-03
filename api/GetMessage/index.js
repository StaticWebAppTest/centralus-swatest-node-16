module.exports = async function (context, req) {
  const date = "2023-10-03T15:09:31.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

