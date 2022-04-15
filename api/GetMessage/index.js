module.exports = async function (context, req) {
  const date = "2022-04-15T09:10:28.607Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

