module.exports = async function (context, req) {
  const date = "2023-10-29T05:08:30.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

