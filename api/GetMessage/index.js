module.exports = async function (context, req) {
  const date = "2022-11-25T16:13:20.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

