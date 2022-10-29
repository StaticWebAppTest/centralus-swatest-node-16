module.exports = async function (context, req) {
  const date = "2022-10-29T09:11:07.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

