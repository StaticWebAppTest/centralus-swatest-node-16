module.exports = async function (context, req) {
  const date = "2024-12-13T09:13:25.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

