module.exports = async function (context, req) {
  const date = "2022-04-23T06:12:56.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

