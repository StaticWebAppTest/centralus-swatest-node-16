module.exports = async function (context, req) {
  const date = "2022-05-26T23:10:52.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

