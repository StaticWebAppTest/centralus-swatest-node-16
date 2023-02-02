module.exports = async function (context, req) {
  const date = "2023-02-02T04:11:54.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

