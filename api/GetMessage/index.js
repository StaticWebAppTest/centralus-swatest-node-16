module.exports = async function (context, req) {
  const date = "2022-05-13T16:15:59.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

