module.exports = async function (context, req) {
  const date = "2022-08-16T22:11:36.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

