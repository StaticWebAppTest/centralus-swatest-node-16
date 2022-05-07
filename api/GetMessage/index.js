module.exports = async function (context, req) {
  const date = "2022-05-07T09:10:26.448Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

