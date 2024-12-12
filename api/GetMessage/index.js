module.exports = async function (context, req) {
  const date = "2024-12-12T13:23:20.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

