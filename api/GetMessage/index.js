module.exports = async function (context, req) {
  const date = "2022-03-04T15:10:59.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

