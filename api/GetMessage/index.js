module.exports = async function (context, req) {
  const date = "2024-11-17T11:09:12.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

