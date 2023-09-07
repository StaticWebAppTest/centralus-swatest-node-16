module.exports = async function (context, req) {
  const date = "2023-09-07T08:11:23.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

