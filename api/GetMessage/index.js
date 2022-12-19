module.exports = async function (context, req) {
  const date = "2022-12-19T17:07:23.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

