module.exports = async function (context, req) {
  const date = "2022-10-30T19:09:02.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

