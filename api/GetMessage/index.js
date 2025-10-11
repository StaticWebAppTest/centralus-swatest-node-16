module.exports = async function (context, req) {
  const date = "2025-10-11T18:15:23.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

