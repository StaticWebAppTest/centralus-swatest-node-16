module.exports = async function (context, req) {
  const date = "2022-04-14T13:25:25.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

