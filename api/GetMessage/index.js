module.exports = async function (context, req) {
  const date = "2022-07-04T03:42:02.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

