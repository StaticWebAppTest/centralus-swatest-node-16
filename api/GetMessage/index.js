module.exports = async function (context, req) {
  const date = "2023-10-11T16:11:44.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

