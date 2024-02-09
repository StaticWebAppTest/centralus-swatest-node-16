module.exports = async function (context, req) {
  const date = "2024-02-09T13:09:10.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

