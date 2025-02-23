module.exports = async function (context, req) {
  const date = "2025-02-23T05:10:52.454Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

