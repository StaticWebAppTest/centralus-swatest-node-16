module.exports = async function (context, req) {
  const date = "2022-10-21T22:13:31.454Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

