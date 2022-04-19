module.exports = async function (context, req) {
  const date = "2022-04-19T11:09:44.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

