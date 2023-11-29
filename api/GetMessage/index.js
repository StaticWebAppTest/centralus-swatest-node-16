module.exports = async function (context, req) {
  const date = "2023-11-29T08:12:22.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

