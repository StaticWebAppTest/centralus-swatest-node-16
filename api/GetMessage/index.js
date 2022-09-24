module.exports = async function (context, req) {
  const date = "2022-09-24T11:10:12.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

