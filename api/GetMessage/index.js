module.exports = async function (context, req) {
  const date = "2022-12-30T19:07:06.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

