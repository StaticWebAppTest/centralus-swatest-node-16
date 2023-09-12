module.exports = async function (context, req) {
  const date = "2023-09-12T15:09:00.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

