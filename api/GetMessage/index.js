module.exports = async function (context, req) {
  const date = "2023-05-30T07:08:25.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

