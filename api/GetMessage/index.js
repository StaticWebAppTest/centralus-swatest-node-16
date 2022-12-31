module.exports = async function (context, req) {
  const date = "2022-12-31T09:08:23.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

