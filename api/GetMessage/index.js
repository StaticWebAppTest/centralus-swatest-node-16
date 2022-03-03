module.exports = async function (context, req) {
  const date = "2022-03-03T11:11:34.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

