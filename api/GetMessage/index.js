module.exports = async function (context, req) {
  const date = "2022-09-29T16:20:36.539Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

