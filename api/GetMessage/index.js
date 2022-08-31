module.exports = async function (context, req) {
  const date = "2022-08-31T11:09:55.694Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

