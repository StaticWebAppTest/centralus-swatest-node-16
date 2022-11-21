module.exports = async function (context, req) {
  const date = "2022-11-21T14:09:36.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

