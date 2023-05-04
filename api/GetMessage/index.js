module.exports = async function (context, req) {
  const date = "2023-05-04T15:09:17.010Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

