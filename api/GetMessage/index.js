module.exports = async function (context, req) {
  const date = "2022-08-23T09:11:27.259Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

