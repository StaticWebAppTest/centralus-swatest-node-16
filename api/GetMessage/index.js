module.exports = async function (context, req) {
  const date = "2022-09-15T09:14:43.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

