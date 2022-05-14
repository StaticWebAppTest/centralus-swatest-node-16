module.exports = async function (context, req) {
  const date = "2022-05-14T11:09:11.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

