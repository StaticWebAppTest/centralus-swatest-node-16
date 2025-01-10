module.exports = async function (context, req) {
  const date = "2025-01-10T11:10:10.449Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

