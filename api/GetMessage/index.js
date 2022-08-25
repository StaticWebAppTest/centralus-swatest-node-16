module.exports = async function (context, req) {
  const date = "2022-08-25T15:11:50.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

