module.exports = async function (context, req) {
  const date = "2022-07-25T08:15:42.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

