module.exports = async function (context, req) {
  const date = "2022-11-10T14:23:41.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

