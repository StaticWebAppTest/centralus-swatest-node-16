module.exports = async function (context, req) {
  const date = "2022-12-27T15:09:14.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

