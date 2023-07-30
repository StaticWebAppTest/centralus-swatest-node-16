module.exports = async function (context, req) {
  const date = "2023-07-30T16:09:49.511Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

