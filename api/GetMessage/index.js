module.exports = async function (context, req) {
  const date = "2022-05-04T14:15:17.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

