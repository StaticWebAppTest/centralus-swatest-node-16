module.exports = async function (context, req) {
  const date = "2022-10-26T06:16:40.649Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

