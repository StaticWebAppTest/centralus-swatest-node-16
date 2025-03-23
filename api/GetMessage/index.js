module.exports = async function (context, req) {
  const date = "2025-03-23T09:11:30.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

