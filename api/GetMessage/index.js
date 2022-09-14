module.exports = async function (context, req) {
  const date = "2022-09-14T14:20:40.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

