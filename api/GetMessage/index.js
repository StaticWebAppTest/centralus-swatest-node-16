module.exports = async function (context, req) {
  const date = "2022-09-29T06:03:46.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

