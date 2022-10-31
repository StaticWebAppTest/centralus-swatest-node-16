module.exports = async function (context, req) {
  const date = "2022-10-31T13:44:33.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

