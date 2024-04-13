module.exports = async function (context, req) {
  const date = "2024-04-13T08:09:03.454Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

