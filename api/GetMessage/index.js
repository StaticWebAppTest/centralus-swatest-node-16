module.exports = async function (context, req) {
  const date = "2022-05-12T23:12:06.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

