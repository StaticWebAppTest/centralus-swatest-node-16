module.exports = async function (context, req) {
  const date = "2024-10-10T08:15:24.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

