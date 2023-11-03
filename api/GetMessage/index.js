module.exports = async function (context, req) {
  const date = "2023-11-03T00:41:23.511Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

