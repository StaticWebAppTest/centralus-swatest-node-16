module.exports = async function (context, req) {
  const date = "2022-10-04T19:17:11.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

