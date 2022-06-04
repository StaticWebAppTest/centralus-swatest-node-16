module.exports = async function (context, req) {
  const date = "2022-06-04T11:09:38.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

