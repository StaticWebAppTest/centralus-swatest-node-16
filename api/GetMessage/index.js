module.exports = async function (context, req) {
  const date = "2022-07-22T15:11:35.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

