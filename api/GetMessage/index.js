module.exports = async function (context, req) {
  const date = "2022-10-16T09:14:35.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

