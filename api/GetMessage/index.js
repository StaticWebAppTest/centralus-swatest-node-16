module.exports = async function (context, req) {
  const date = "2022-05-30T19:09:06.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

