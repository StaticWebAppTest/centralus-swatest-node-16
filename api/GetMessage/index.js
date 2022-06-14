module.exports = async function (context, req) {
  const date = "2022-06-14T14:09:26.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

