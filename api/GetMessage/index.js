module.exports = async function (context, req) {
  const date = "2024-05-07T13:10:02.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

