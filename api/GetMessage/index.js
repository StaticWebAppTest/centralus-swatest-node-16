module.exports = async function (context, req) {
  const date = "2022-03-16T03:14:08.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

