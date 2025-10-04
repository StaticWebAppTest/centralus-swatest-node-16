module.exports = async function (context, req) {
  const date = "2025-10-04T07:10:57.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

