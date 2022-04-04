module.exports = async function (context, req) {
  const date = "2022-04-04T14:10:39.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

