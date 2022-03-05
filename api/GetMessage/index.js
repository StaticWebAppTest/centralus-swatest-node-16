module.exports = async function (context, req) {
  const date = "2022-03-05T17:09:19.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

