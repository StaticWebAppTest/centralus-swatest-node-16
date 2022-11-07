module.exports = async function (context, req) {
  const date = "2022-11-07T12:25:44.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

