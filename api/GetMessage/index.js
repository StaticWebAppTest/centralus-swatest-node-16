module.exports = async function (context, req) {
  const date = "2022-06-06T11:07:49.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

