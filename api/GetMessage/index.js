module.exports = async function (context, req) {
  const date = "2022-10-29T07:10:20.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

