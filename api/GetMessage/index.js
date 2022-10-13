module.exports = async function (context, req) {
  const date = "2022-10-13T04:09:12.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

