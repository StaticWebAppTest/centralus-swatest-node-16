module.exports = async function (context, req) {
  const date = "2024-08-12T23:11:40.454Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

