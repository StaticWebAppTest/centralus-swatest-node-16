module.exports = async function (context, req) {
  const date = "2023-12-30T16:10:27.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

