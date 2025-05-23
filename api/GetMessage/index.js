module.exports = async function (context, req) {
  const date = "2025-05-23T11:11:09.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

