module.exports = async function (context, req) {
  const date = "2022-08-29T09:11:23.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

