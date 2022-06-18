module.exports = async function (context, req) {
  const date = "2022-06-18T11:08:12.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

