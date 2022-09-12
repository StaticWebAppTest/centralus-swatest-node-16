module.exports = async function (context, req) {
  const date = "2022-09-12T11:10:58.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

