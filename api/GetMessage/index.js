module.exports = async function (context, req) {
  const date = "2022-09-22T11:10:40.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

