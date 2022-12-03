module.exports = async function (context, req) {
  const date = "2022-12-03T17:07:59.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

