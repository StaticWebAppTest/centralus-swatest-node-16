module.exports = async function (context, req) {
  const date = "2022-08-14T15:10:47.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

