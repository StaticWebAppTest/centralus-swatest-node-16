module.exports = async function (context, req) {
  const date = "2024-08-11T14:10:19.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

