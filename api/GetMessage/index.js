module.exports = async function (context, req) {
  const date = "2022-07-14T03:45:51.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

