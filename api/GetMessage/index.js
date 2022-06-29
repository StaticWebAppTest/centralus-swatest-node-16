module.exports = async function (context, req) {
  const date = "2022-06-29T11:09:28.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

