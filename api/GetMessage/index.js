module.exports = async function (context, req) {
  const date = "2024-06-10T07:10:13.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

