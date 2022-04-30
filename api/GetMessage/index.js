module.exports = async function (context, req) {
  const date = "2022-04-30T13:19:42.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

