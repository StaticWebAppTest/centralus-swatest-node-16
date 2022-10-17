module.exports = async function (context, req) {
  const date = "2022-10-17T07:39:52.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

